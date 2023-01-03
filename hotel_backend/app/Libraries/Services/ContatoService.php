<?php

namespace App\Libraries\Services;

use App\Models\Entity\Contato;
use App\Models\Repository\ContatoRepository;
use Daycry\Doctrine\Doctrine;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;
use Symfony\Component\Serializer\Serializer;

class ContatoService
{

    private ContatoRepository $contatoRepository;
    private Doctrine $doctrine;
    private array $encoders;
    private array $normalizer;
    private Serializer $serializer;
    private string $format;


    public function __construct()
    {
        $this->doctrine = new Doctrine();
        $this->contatoRepository = new ContatoRepository($this->doctrine->em, $this->doctrine->em->getClassMetadata('App\Models\Entity\Contato'));
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
        $contatosDto = $this->contatoRepository->listarTodos();
        return $this->serializer->serialize($contatosDto, $this->format);
    }

    public function listarPorId($id): string
    {
        $contatoDto = $this->contatoRepository->listarPorId($id);
        return $this->serializer->serialize($contatoDto, $this->format);
    }

    public function convert($contatoForm): Contato
    {
        return new Contato(
            $contatoForm['email'],
            $contatoForm['telefone'],
        );
    }

}
