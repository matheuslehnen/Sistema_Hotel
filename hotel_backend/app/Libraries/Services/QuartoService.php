<?php

namespace App\Libraries\Services;

use App\Models\Entity\Quarto;
use App\Models\Repository\ClienteRepository;
use App\Models\Repository\QuartoRepository;
use Daycry\Doctrine\Doctrine;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;
use Symfony\Component\Serializer\Serializer;

class QuartoService
{

    private Doctrine $doctrine;
    private QuartoRepository $quartoRepository;
    private ClienteService $clienteService;
    private array $encoders;
    private array $normalizer;
    private Serializer $serializer;
    private string $format;


    public function __construct()
    {
        $this->doctrine = new Doctrine();
        $this->quartoRepository = new QuartoRepository($this->doctrine->em, $this->doctrine->em->getClassMetadata('App\Models\Entity\Quarto'));
        $this->clienteService = new ClienteService();
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
        $quartosDto = $this->quartoRepository->listarTodos();
        return $this->serializer->serialize($quartosDto, $this->format);
    }

    public function listarUm($id): string
    {
        $quartoDto = $this->quartoRepository->listarPorId($id);
        return $this->serializer->serialize($quartoDto, $this->format);
    }

    public function listarTodosVagos(): string
    {
        $quartosDto = $this->quartoRepository->listarTodosVagos();
        return $this->serializer->serialize($quartosDto, $this->format);
    }

    public function listarTodosVagosParaCliente($cpf): string
    {
        $cliente = $this->serializer->decode($this->clienteService->listarPorCpf($cpf), $this->format);
        if(!empty($cliente)){
            $response =
            $response = [
                'status' => true,
                'quartos' => $this->quartoRepository->listarTodosVagosParaCliente($cliente['fumante'])
            ];
        } else {
            $response = [
                'status' => false,
                'motivo' => 'Cliente não existente.'
            ];
        }
        return $this->serializer->serialize($response, $this->format);
    }

    public function save(?string $getBody): string
    {
        $request = $this->serializer->decode($getBody, $this->format);
        $quarto = new Quarto(
            $request['localizacao'],
            $request['tipo'],
            $request['valor'],
            $request['permiteFumante'],
            $request['situacao'],
        );
        $quartoDto = $this->quartoRepository->save($quarto);
        return $this->serializer->serialize($quartoDto, $this->format);
    }

    public function update(?string $getBody, $id): string
    {
        $request = $this->serializer->decode($getBody, $this->format);
        $quarto = $this->quartoRepository->listarPorId($id);
        $quarto->setLocalizacao($request['localizacao']);
        $quarto->setTipo($request['tipo']);
        $quarto->setValor($request['valor']);
        $quarto->setPermiteFumante($request['permiteFumante']);
        $quarto->setSituacao($request['situacao']);
        $quartoDto = $this->quartoRepository->update($quarto);
        return $this->serializer->serialize($quartoDto, $this->format);
    }

    public function delete($id = null): string
    {
        $quarto = $this->quartoRepository->listarPorId($id);
        return $quarto != null && $this->quartoRepository->delete($quarto);
    }




}
