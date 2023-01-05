<?php

namespace App\Libraries\Services;


use App\Models\Entity\Cliente;
use App\Models\Repository\ClienteRepository;
use App\Models\Repository\ContatoRepository;
use App\Models\Repository\EnderecoRepository;
use Daycry\Doctrine\Doctrine;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;
use Symfony\Component\Serializer\Serializer;

class ClienteService
{
    private Doctrine $doctrine;
    private ContatoService $contatoService;
    private EnderecoService $enderecoService;
    private UsuarioService $usuarioService;
    private ContatoRepository $contatoRepository;
    private EnderecoRepository $enderecoRepository;
    private ClienteRepository $clienteRepository;
    private array $encoders;
    private array $normalizer;
    private Serializer $serializer;
    private string $format;

    public function __construct()
    {
        $this->doctrine = new Doctrine();
        $this->contatoService = new ContatoService();
        $this->enderecoService = new EnderecoService();
        $this->contatoRepository = new ContatoRepository($this->doctrine->em, $this->doctrine->em->getClassMetadata('App\Models\Entity\Contato'));
        $this->enderecoRepository = new EnderecoRepository($this->doctrine->em, $this->doctrine->em->getClassMetadata('App\Models\Entity\Endereco'));
        $this->clienteRepository = new ClienteRepository($this->doctrine->em, $this->doctrine->em->getClassMetadata('App\Models\Entity\Cliente'));
        $this->encoders = [
            new XmlEncoder(),
            new JsonEncoder()
        ];
        $this->normalizer = [
            new GetSetMethodNormalizer()
        ];
        $this->serializer = new Serializer($this->normalizer, $this->encoders);
        $this->format = 'json';
    }

    public function listarTodos(): string
    {
        $clientes = $this->clienteRepository->listarTodos();
        return $this->serializer->serialize($clientes, $this->format);
    }

    public function listarPorId($id): string
    {
        $cliente = $this->clienteRepository->listarPorId($id);
        return $this->serializer->serialize($cliente, $this->format);
    }

    public function listarPorCpf($cpf)
    {
        $cliente = $this->clienteRepository->listarPorCpf($cpf);
        return $this->serializer->serialize($cliente, $this->format);
    }

    public function save(?string $getBody): string
    {
        $request = $this->serializer->decode($getBody, $this->format);

        $contato = $this->contatoService->convert($request['idContato']);
        $endereco = $this->enderecoService->convert($request['idEndereco']);
        $this->contatoRepository->save($contato);
        $this->enderecoRepository->save($endereco);

        $cliente = new Cliente(
            $request['nome'],
            $request['cpf'],
            $request['nascimento'],
            $request['fumante'],
            $contato,
            $endereco,
        );

        $clienteDto = $this->clienteRepository->save($cliente);
        return $this->serializer->serialize($cliente, $this->format);
    }

    public function update(?string $getBody, $id): string
    {
        $request = $this->serializer->decode($getBody, $this->format);

        $cliente = $this->clienteRepository->listarPorId($id);

        $cliente->setNome($request['nome']);
        $cliente->setCpf($request['cpf']);
        $cliente->setNascimento($request['nascimento']);
        $cliente->setFumante($request['fumante']);
        $cliente->getIdContato()->setEmail($request['idContato']['email']);
        $cliente->getIdContato()->setTelefone($request['idContato']['telefone']);
        $cliente->getIdEndereco()->setCep($request['idEndereco']['cep']);
        $cliente->getIdEndereco()->setLogradouro($request['idEndereco']['logradouro']);
        $cliente->getIdEndereco()->setNumero($request['idEndereco']['numero']);
        $cliente->getIdEndereco()->setBairro($request['idEndereco']['bairro']);
        $cliente->getIdEndereco()->setLocalidade($request['idEndereco']['localidade']);
        $cliente->getIdEndereco()->setUf($request['idEndereco']['uf']);

        $clienteDto = $this->clienteRepository->update($cliente, $id);
        return $this->serializer->serialize($clienteDto, $this->format);
    }

    public function delete($id){
        $cliente = $this->clienteRepository->listarPorId($id);
        if(!empty($cliente)){
            $this->contatoRepository->delete($cliente->getIdContato());
            $this->enderecoRepository->delete($cliente->getIdEndereco());
            return $this->clienteRepository->delete($cliente);
        } else {
            return false;
        }
    }



}
