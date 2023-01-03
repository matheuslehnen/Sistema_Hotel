<?php

namespace App\Controllers;

use App\Libraries\Services\UsuarioService;
use CodeIgniter\HTTP\Response;
use CodeIgniter\RESTful\ResourceController;

class UsuarioController extends ResourceController
{

    private UsuarioService $usuarioService;

    public function __construct()
    {
        $this->usuarioService = new UsuarioService();
        header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    }


    public function index(): Response
    {
        $usuariosDto = $this->usuarioService->listarTodos();
        return $this->response->setJSON($usuariosDto);
    }

    public function show($id = null): Response
    {
        $usuarioDto = $this->usuarioService->listarPorId($id);
        return $this->response->setJSON($usuarioDto);
    }

    public function create(): Response
    {
        $usuarioDto = $this->usuarioService->save($this->request->getBody());
        return $this->response->setJSON($usuarioDto);
    }

    public function update($id = null): Response
    {
        $usuarioDto = $this->usuarioService->update($this->request->getBody(), $id);
        return $this->response->setJSON($usuarioDto);
    }

    public function delete($id = null): Response
    {
        $usuarioDto = $this->usuarioService->delete($id);
        return $this->response->setJSON($usuarioDto );
    }

    public function login(): Response
    {
        $acessoDto = $this->usuarioService->login($this->request->getBody());
        return $this->response->setJSON("$acessoDto");
    }

    //public function recuperarSenha($email): Response
    //{
    //    $recuperarSenhaDto = $this->usuarioService->recuperarSenha($email);
    //    return $this->response->setJSON($recuperarSenhaDto);
    //}
}
