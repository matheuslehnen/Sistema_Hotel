<?php

namespace App\Libraries\Services;

use App\Models\Entity\Endereco;
use App\Models\Repository\EnderecoRepository;
use Daycry\Doctrine\Doctrine;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;
use Symfony\Component\Serializer\Serializer;

class EnderecoService
{

    private Doctrine $doctrine;
    private EnderecoRepository $enderecoRepository;
    private array $encoders;
    private array $normalizer;
    private Serializer $serializer;
    private string $format;


    public function __construct()
    {
        $this->doctrine = new Doctrine();
        $this->enderecoRepository = new EnderecoRepository($this->doctrine->em, $this->doctrine->em->getClassMetadata('App\Models\Entity\Endereco'));
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
        $enderecosDto = $this->enderecoRepository->listarTodos();
        return $this->serializer->serialize($enderecosDto, $this->format);
    }

    public function listarPorId($id): string
    {
        $enderecoDto = $this->enderecoRepository->listarPorId($id);
        return $this->serializer->serialize($enderecoDto, $this->format);
    }

    public function convert($enderecoForm)
    {
        return new Endereco(
            $enderecoForm['cep'],
            $enderecoForm['logradouro'],
            $enderecoForm['numero'],
            $enderecoForm['bairro'],
            $enderecoForm['localidade'],
            $enderecoForm['uf']
        );
    }

}
