<?php

namespace App\Libraries\Services;

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
        $usuariosDto = $this->usuarioRepository->listarTodos();

        if (!empty($usuariosDto)) {
            $response = [
                'status' => true,
                'usuarios' => $usuariosDto,
            ];
        } else {
            $response = [
                'status' => false,
                'motivo' => 'Não existem usuários cadastrados.',
            ];
        }
        return $this->serializer->serialize($response, $this->format);
    }

    public function listarPorId($id): string
    {
        $usuarioDto = $this->usuarioRepository->listarPorId($id);

        if (!empty($usuario)) {
            $response = [
                'status' => true,
                'usuario' => $usuarioDto,
            ];
        } else {
            $response = [
                'status' => false,
                'motivo' => 'Usuário não encontrado.',
            ];
        }
        return $this->serializer->serialize($response, $this->format);
    }

    public function save(?string $getBody): string
    {
        $request = $this->serializer->decode($getBody, $this->format);

        $usuario = new Usuario(
            $request['login'],
            $request['senha'],
        );
        $usuarioDto = $this->usuarioRepository->save($usuario);
        $response = [
            'status' => true,
            'usuario' => $usuarioDto,
        ];

        return $this->serializer->serialize($response, $this->format);
    }

    public function update(?string $getBody, $id): string
    {
        $request = $this->serializer->decode($getBody, $this->format);
        $usuario = $this->usuarioRepository->listarPorId($id);

        if(!empty($usuario)){
            $usuario->setLogin($request['login']);
            $usuario->setSenha($request['senha']);
            $usuarioDto = $this->usuarioRepository->update($usuario);
            $response = [
                'status' => true,
                'usuario' => $usuarioDto,
            ];
        } else {
            $response = [
                'status' => false,
                'motivo' => "Usuário não encontrado.",
            ];
        }
        return $this->serializer->serialize($response, $this->format);
    }

    public function delete($id = null): string
    {
        $usuarioDto = $this->usuarioRepository->listarPorId($id);

        if(!empty($usuarioDto)){
            $this->usuarioRepository->delete($usuarioDto);
            $response = [
                'status' => true,
                'usuario' => null,
            ];
        } else {
            $response = [
                'status' => false,
                'motivo' => "Usuário não encontrado.",
            ];
        }
        return $this->serializer->serialize($response, $this->format);
    }

    public function login(?string $getBody): string
    {
        $request = $this->serializer->decode($getBody, $this->format);
        $usuario = $this->usuarioRepository->listarPorLogin($request['login']);

        if (!empty($usuario) && $request['senha'] == $usuario->getSenha()) {
            $response = [
                'status' => true,
                'usuario' => $usuario,
            ];
        } else {
            if(empty($usuario)) {
                $response = [
                    'status' => false,
                    'motivo' => "Usuário não encontrado.",
                ];
            } else {
                $response = [
                    'status' => false,
                    'motivo' => "Senha incorreta.",
                ];
            }
        }
        return $this->serializer->serialize($response, $this->format);
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
            $usuarioForm['login'],
            $usuarioForm['senha'],
        );
    }


}
