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
    }


    public function index(): Response
    {
        $response = $this->usuarioService->listarTodos();
        return $this->response->setJSON($response);
    }

    public function show($id = null): Response
    {
        $response = $this->usuarioService->listarPorId($id);
        return $this->response->setJSON($response);
    }

    public function create(): Response
    {
        $response = $this->usuarioService->save($this->request->getBody());
        return $this->response->setJSON($response);
    }

    public function update($id = null): Response
    {
        $response = $this->usuarioService->update($this->request->getBody(), $id);
        return $this->response->setJSON($response);
    }

    public function delete($id = null): Response
    {

        $response = $this->usuarioService->delete($id);
        return $this->response->setJSON($response);
    }

    public function login(): Response
    {
        $response = $this->usuarioService->login($this->request->getBody());
        return $this->response->setJSON($response);
    }

    //public function recuperarSenha($email): Response
    //{
    //    $response = $this->usuarioService->recuperarSenha($email);
    //    return $this->response->setJSON($response);
    //}
}
