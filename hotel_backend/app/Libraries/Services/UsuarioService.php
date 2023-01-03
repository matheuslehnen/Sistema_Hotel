<?php

namespace App\Libraries\Services;

use App\Models\Dto\AcessoDto;
use App\Models\Entity\Usuario;
use App\Models\Repository\UsuarioRepository;
use Daycry\Doctrine\Doctrine;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;
use Symfony\Component\Serializer\Serializer;

class UsuarioService
{

    private Doctrine $doctrine;
    private UsuarioRepository $usuarioRepository;
    private array $encoders;
    private array $normalizers;
    private Serializer $serializer;
    private string $format;


    public function __construct()
    {
        $this->doctrine = new Doctrine();
        $this->usuarioRepository = new UsuarioRepository($this->doctrine->em, $this->doctrine->em->getClassMetadata('App\Models\Entity\Usuario'));
        $this->encoders = [
            new XmlEncoder(),
            new JsonEncoder()
            ];
        $this->normalizers = [
            new GetSetMethodNormalizer()
        ];
        $this->serializer = new Serializer($this->normalizers, $this->encoders);
        $this->format = 'json';
    }

    public function listarTodos(): string
    {
        $usuarios = $this->usuarioRepository->listarTodos();
        return $this->serializer->serialize($usuarios, $this->format);
    }

    public function listarPorId($id): string
    {
        $usuario = $this->usuarioRepository->listarPorId($id);
        return $this->serializer->serialize($usuario, $this->format);
    }

    public function save(?string $getBody): string
    {
        $request = $this->serializer->decode($getBody, $this->format);
        $usuario = new Usuario(
            $request['login'],
            $request['senha'],
        );
        $usuarioDto = $this->usuarioRepository->save($usuario);
        return $this->serializer->serialize($usuarioDto, $this->format);
    }

    public function update(?string $getBody, $id): string
    {
        $request = $this->serializer->decode($getBody, $this->format);

        $usuarioAntigo = $this->usuarioRepository->listarPorId($id);
        $usuarioAntigo->setLogin($request['login']);
        $usuarioAntigo->setSenha($request['senha']);

        $usuarioDto = $this->usuarioRepository->update($usuarioAntigo);
        return $this->serializer->serialize($usuarioDto, $this->format);
    }

    public function delete($id = null): string
    {
        $usuarioDto = $this->usuarioRepository->listarPorId($id);
        return $this->serializer->serialize($usuarioDto, $this->format);
        //return $usuarioDto != null ? 'Usuário excluído com sucesso!': 'Usuário não encontrado';
    }

    public function login(?string $getBody): string
    {
        $request = $this->serializer->decode($getBody, $this->format);
        $usuario = $this->usuarioRepository->listarPorLogin($request['login']);

        if($usuario != null && $request['senha'] == $usuario->getSenha()){
            $acesso = new AcessoDto(
                $usuario->getId(),
                $usuario->getLogin(),
                true
            );

        } else {
            $acesso = new AcessoDto(
                null,
                $request['login'],
                false
            );
        }

        return $this->serializer->serialize($acesso, $this->format);
    }

    //public function recuperarSenha($email): string
    //{
    //    $usuario = $this->usuarioRepository->listarPorEmail($email);
    //
    //    if($usuario){
    //        $senhaRandom = rand(0, 999999);
    //        $usuario->setSenha(md5($senhaRandom));
    //
    //        $recuperarSenha = $this->emailService->enviarEmailRecuperacao($usuario, $senhaRandom);
    //        return $this->serializer->serialize($recuperarSenha, $this->format);
    //    } else {
    //        return $this->serializer->serialize('Usuário não encontrado!', $this->format);
    //
    //    }
    //}

    public function convert($usuarioForm)
    {
        return new Usuario(
            $usuarioForm['nome'],
            $usuarioForm['login'],
            $usuarioForm['senha'],
            $usuarioForm['tipo'],
        );
    }


}
