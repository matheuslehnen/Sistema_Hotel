<?php

namespace App\Libraries\Services;


use App\Models\Entity\Cliente;
use App\Models\Repository\ClienteRepository;
use App\Models\Repository\ContatoRepository;
use App\Models\Repository\EnderecoRepository;
use App\Models\Repository\UsuarioRepository;
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
    private UsuarioRepository $usuarioRepository;
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
        $this->usuarioService = new UsuarioService();
        $this->contatoRepository = new ContatoRepository($this->doctrine->em, $this->doctrine->em->getClassMetadata('App\Models\Entity\Contato'));
        $this->enderecoRepository = new EnderecoRepository($this->doctrine->em, $this->doctrine->em->getClassMetadata('App\Models\Entity\Endereco'));
        $this->usuarioRepository = new UsuarioRepository($this->doctrine->em, $this->doctrine->em->getClassMetadata('App\Models\Entity\Usuario'));
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

    public function save(?string $getBody): string
    {
        $request = $this->serializer->decode($getBody, $this->format);

        $contato = $this->contatoService->convert($request['idContato']);
        $endereco = $this->enderecoService->convert($request['idEndereco']);
        $usuario = $this->usuarioService->convert($request['idUsuario']);
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

        $clienteAntigo = $this->clienteRepository->listarPorId($id);

        $clienteAntigo->setNome($request['nome']);
        $clienteAntigo->setCpf($request['cpf']);
        $clienteAntigo->setNascimento($request['nascimento']);
        $clienteAntigo->setFumante($request['fumante']);
        $clienteAntigo->getIdContato()->setEmail($request['idContato']['email']);
        $clienteAntigo->getIdContato()->setTelefone($request['idContato']['telefone']);
        $clienteAntigo->getIdEndereco()->setCep($request['idEndereco']['cep']);
        $clienteAntigo->getIdEndereco()->setLogradouro($request['idEndereco']['logradouro']);
        $clienteAntigo->getIdEndereco()->setNumero($request['idEndereco']['numero']);
        $clienteAntigo->getIdEndereco()->setBairro($request['idEndereco']['bairro']);
        $clienteAntigo->getIdEndereco()->setLocalidade($request['idEndereco']['localidade']);
        $clienteAntigo->getIdEndereco()->setUf($request['idEndereco']['uf']);
        $clienteAntigo->getIdUsuario()->setLogin($request['idUsuario']['login']);
        $clienteAntigo->getIdUsuario()->setSenha( $request['idUsuario']['senha']);

        $clienteDto = $this->clienteRepository->update($clienteAntigo, $id);
        return $this->serializer->serialize($clienteDto, $this->format);
    }

    public function delete($id){
        $cliente = $this->clienteRepository->listarPorId($id);
        if(!empty($cliente)){
            $this->contatoRepository->delete($cliente->getIdContato());
            $this->enderecoRepository->delete($cliente->getIdEndereco());
            $this->usuarioRepository->delete($cliente->getIdUsuario());
            $this->clienteRepository->delete($cliente);
            return 'Cliente excluído com sucesso!';
        } else {
            return 'Cliente Não Encontrado';
        }
    }

}
