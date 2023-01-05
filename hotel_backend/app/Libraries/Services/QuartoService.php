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

        if (!empty($quartosDto)) {
            $response = [
                'status' => true,
                'quartos' => $quartosDto,
            ];
        } else {
            $response = [
                'status' => false,
                'motivo' => 'Não existem quartos cadastrados.',
            ];
        }
        return $this->serializer->serialize($response, $this->format);
    }

    public function listarUm($id): string
    {
        $quartoDto = $this->quartoRepository->listarPorId($id);

        if (!empty($quartoDto)) {
            $response = [
                'status' => true,
                'quarto' => $quartoDto,
            ];
        } else {
            $response = [
                'status' => false,
                'motivo' => 'Quarto não encontrado.',
            ];
        }
        return $this->serializer->serialize($response, $this->format);
    }

    public function listarTodosVagos(): string
    {
        $quartosDto = $this->quartoRepository->listarTodosVagos();
        if (!empty($quartosDto)) {
            $response = [
                'status' => true,
                'quartosVagos' => $quartosDto,
            ];
        } else {
            $response = [
                'status' => false,
                'motivo' => 'Não existem quartos vagos no momento.',
            ];
        }
        return $this->serializer->serialize($response, $this->format);
    }

    public function listarTodosVagosParaCliente($cpf): string
    {
        $response = $this->serializer->decode($this->clienteService->listarPorCpf($cpf), $this->format);
        if($response['status']){
            $response = [
                'status' => true,
                'quartos' => $this->quartoRepository->listarTodosVagosParaCliente($response['cliente']['fumante'])
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
        $response = [
            'status' => true,
            'quarto' => $quartoDto,
        ];

        return $this->serializer->serialize($response, $this->format);
    }

    public function update(?string $getBody, $id): string
    {
        $request = $this->serializer->decode($getBody, $this->format);
        $quarto = $this->quartoRepository->listarPorId($id);

        if(!empty($quarto)){
            $quarto->setLocalizacao($request['localizacao']);
            $quarto->setTipo($request['tipo']);
            $quarto->setValor($request['valor']);
            $quarto->setPermiteFumante($request['permiteFumante']);
            $quarto->setSituacao($request['situacao']);
            $quartoDto = $this->quartoRepository->update($quarto);

            $response = [
                'status' => true,
                'quarto' => $quartoDto,
            ];
        } else {
            $response = [
                'status' => false,
                'motivo' => "Quarto não encontrado.",
            ];
        }
        return $this->serializer->serialize($response, $this->format);
    }

    public function delete($id = null): string
    {
        $quarto = $this->quartoRepository->listarPorId($id);

        if(!empty($quarto)){
            $this->quartoRepository->delete($quarto);
            $response = [
                'status' => true,
                'quarto' => null,
            ];
        } else {
            $response = [
                'status' => false,
                'motivo' => "Quarto não encontrado.",
            ];
        }
        return $this->serializer->serialize($response, $this->format);
    }




}
