<?php

namespace App\Controllers;

use App\Libraries\Services\QuartoService;
use CodeIgniter\HTTP\Response;
use CodeIgniter\RESTful\ResourceController;

class QuartoController extends ResourceController
{

    private QuartoService $quartoService;


    public function __construct()
    {
        $this->quartoService = new QuartoService();
    }

    public function index(): Response
    {
        $response = $this->quartoService->listarTodos();
        return $this->response->setJSON($response);
    }

    public function show($id = null): Response
    {
        $response = $this->quartoService->listarUm($id);
        return $this->response->setJSON($response);
    }

    public function listarVagos()
    {
        $response = $this->quartoService->listarTodosVagos();
        return $this->response->setJSON($response);
    }

    public function listarVagosParaCliente($cpf = null)
    {
        $response = $this->quartoService->listarTodosVagosParaCliente($cpf);
        return $this->response->setJSON($response);
    }

    public function create(): Response
    {
        $response = $this->quartoService->save($this->request->getBody());
        return $this->response->setJSON($response);
    }

    public function update($id = null)
    {
        $response = $this->quartoService->update($this->request->getBody(), $id);
        return $this->response->setJSON($response);
    }

    public function delete($id = null)
    {
        $response = $this->quartoService->delete($id);
        return $this->response->setJSON($response);
    }


}
