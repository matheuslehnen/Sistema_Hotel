<?php

namespace App\Libraries\Services;

use App\Models\Entity\Hospedagem;
use App\Models\Repository\ClienteRepository;
use App\Models\Repository\HospedagemRepository;
use App\Models\Repository\QuartoRepository;
use Daycry\Doctrine\Doctrine;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;
use Symfony\Component\Serializer\Serializer;

class HospedagemService
{

    private Doctrine $doctrine;
    private HospedagemRepository $hospedagemRepository;
    private ClienteRepository $clienteRepository;
    private QuartoRepository $quartoRepository;
    private array $encoders;
    private array $normalizer;
    private Serializer $serializer;
    private string $format;

    public function __construct()
    {
        $this->doctrine = new Doctrine();
        $this->hospedagemRepository = new HospedagemRepository($this->doctrine->em, $this->doctrine->em->getClassMetadata('App\Models\Entity\Hospedagem'));
        $this->clienteRepository = new ClienteRepository($this->doctrine->em, $this->doctrine->em->getClassMetadata('App\Models\Entity\Cliente'));
        $this->quartoRepository = new QuartoRepository($this->doctrine->em, $this->doctrine->em->getClassMetadata('App\Models\Entity\Quarto'));
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


    public function listarTodos()
    {
        $hospedagensDto = $this->hospedagemRepository->listarTodos();
        return $this->serializer->serialize($hospedagensDto, $this->format);
    }

    public function listarPorId($id)
    {
        $hospedagemDto = $this->hospedagemRepository->listarPorId($id);
        return $this->serializer->serialize($hospedagemDto, $this->format);
    }

    public function save(?string $getBody)
    {
        $request = $this->serializer->decode($getBody, $this->format);
        $cliente = $this->clienteRepository->listarPorCpf($request['cpf']);

        if (!empty($cliente)) {
            $hospedagem = $this->hospedagemRepository->listarPorClienteId($cliente->getId());
            if (empty($hospedagem)) {
                $quarto = $this->quartoRepository->listarPorId($request['idQuarto']);
                $total = $this->totalPorHospedagem($quarto->getValor(), $request['diarias']);
                $quarto->setSituacao("Ocupado");
                $hospedagem = new Hospedagem(
                    $request['diarias'],
                    $total,
                    $cliente,
                    $quarto
                );
                $hospedagemDto = $this->hospedagemRepository->save($hospedagem);
                $response = [
                    'status' => true,
                    'hospedagem' => $hospedagemDto,
                ];
            } else {
                $response = [
                    'status' => false,
                    'motivo' => 'Cliente já está hospedado.',
                ];
            }
        } else {
            $response = [
                'status' => false,
                'motivo' => 'Cliente inexistente',
            ];
        }
        return $this->serializer->serialize($response, $this->format);
    }

    public function update(?string $getBody, $id)
    {
        $request = $this->serializer->decode($getBody, $this->format);

        $hospedagem = $this->hospedagemRepository->listarPorId($id);

        $quartoAntigo = $hospedagem->getIdQuarto();
        $quartoAntigo->setSituacao("Vago");
        $quartoAntigo = $this->quartoRepository->update($quartoAntigo);

        $quartoNovo = $this->quartoRepository->listarPorId($request['idQuarto']);

        $hospedagem->setIdQuarto($quartoNovo);
        $hospedagem->setDiarias($request['diarias']);
        $hospedagem->setTotal($this->totalPorHospedagem($quartoNovo->getValor(), $request['diarias']));
        $hospedagemDto = [
            'novaHospedagem' => $this->hospedagemRepository->update($hospedagem),
            'quartoAntigo' => $quartoAntigo
        ];

        return $this->serializer->serialize($hospedagemDto, $this->format);
    }

    public function delete($id)
    {
        $hospedagem = $this->hospedagemRepository->listarPorId($id);
        $quarto = $this->quartoRepository->listarPorId($hospedagem->getIdQuarto()->getId());

        if (!empty($hospedagem)) {
            $this->hospedagemRepository->delete($hospedagem);
            $quarto->setSituacao("Vago");
            $quartoDto = $this->quartoRepository->update($quarto);
            return $this->serializer->serialize($quartoDto, $this->format);
        } else {
            return $this->serializer->serialize("Hospedagem não encontrada.", $this->format);
        }
    }

    private function totalPorHospedagem($valor, $diarias)
    {
        return $valor * $diarias;
    }


}
