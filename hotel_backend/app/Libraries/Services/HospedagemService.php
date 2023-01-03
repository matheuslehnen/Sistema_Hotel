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
        $hospedagensDto = $this->hospedagemRepository->findAll();
        return $this->serializer->serialize($hospedagensDto, $this->format);
    }

    public function listarPorId($id)
    {
        $hospedagemDto = $this->hospedagemRepository->find($id);
        return $this->serializer->serialize($hospedagemDto, $this->format);
    }

    public function save(?string $getBody)
    {
        $request = $this->serializer->decode($getBody, $this->format);
        $cliente = $this->clienteRepository->listaPorCpf($request['cpf']);
        $quarto = $this->quartoRepository->find($request['idQuarto']);

        if(!$quarto->getSituacao()){
            $total = $this->totalPorHospedagem($quarto->getValor(), $request['diarias']);
            $quarto->setSituacao(true);
            $hospedagem = new Hospedagem(
                $request['diarias'],
                $total,
                $cliente,
                $quarto
            );
            $hospedagemDto = $this->hospedagemRepository->save($hospedagem);
            return $this->serializer->serialize($hospedagemDto, $this->format);
        } else {
            return $this->serializer->serialize('Ocupado', $this->format);
        }
    }

    //public function update(?string $getBody, $id)
    //{
    //}

    public function delete($id)
    {
        $hospedagem = $this->hospedagemRepository->find($id);
        if(!empty($hospedagem)){
            $this->hospedagemRepository->delete($hospedagem);
            return "Checkout realizado com sucesso.";
        } else {
            return "Hospedagem não encontrada.";
        }
    }

    private function totalPorHospedagem($valor, $diarias)
    {
        return $valor * $diarias;
    }


}
