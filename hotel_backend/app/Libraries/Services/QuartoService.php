<?php

namespace App\Libraries\Services;

use App\Models\Entity\Quarto;
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
    private array $encoders;
    private array $normalizer;
    private Serializer $serializer;
    private string $format;


    public function __construct()
    {
        $this->doctrine = new Doctrine();
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

    public function save(?string $getBody): string
    {
        $request = $this->serializer->decode($getBody, $this->format);
        $quarto = new Quarto(
            $request['localizacao'],
            $request['permiteFumante'],
            $request['valor'],
            $request['capacidade'],
            $request['situacao'],
        );
        $quartoDto = $this->quartoRepository->save($quarto);
        return $this->serializer->serialize($quartoDto, $this->format);
    }

    public function update(?string $getBody, $id): string
    {
        $request = $this->serializer->decode($getBody, $this->format);
        $quartoAntigo = $this->quartoRepository->listarPorId($id);
        $quartoAntigo->setLocalizacao($request['localizacao']);
        $quartoAntigo->setPermiteFumante($request['permiteFumante']);
        $quartoAntigo->setValor($request['valor']);
        $quartoAntigo->setCapacidade($request['capacidade']);
        $quartoAntigo->setSituacao($request['situacao']);
        $quarto = $this->quartoRepository->update($quartoAntigo);
        return $this->serializer->serialize($quarto, $this->format);
    }

    public function delete($id = null): string
    {
        $quarto = $this->quartoRepository->listarPorId($id);
        return $quarto != null ? $this->quartoRepository->delete($quarto) : 'Quarto não encontrado';
    }


}
