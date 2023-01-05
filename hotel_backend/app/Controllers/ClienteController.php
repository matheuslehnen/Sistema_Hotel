<?php

namespace App\Controllers;

use App\Libraries\Services\ClienteService;
use CodeIgniter\HTTP\Response;
use CodeIgniter\RESTful\ResourceController;

class ClienteController extends ResourceController
{

    private ClienteService $clienteService;

    public function __construct()
    {
        $this->clienteService = new ClienteService();
    }


    public function index(): Response
    {
        $response = $this->clienteService->listarTodos();
        return $this->response->setJSON($response);
    }

    public function show($id = null): Response
    {
        $response = $this->clienteService->listarPorId($id);
       return $this->response->setJSON($response);
    }

    public function create(): Response
    {
        $response = $this->clienteService->save($this->request->getBody());
       return $this->response->setJSON($response);
    }

    public function update($id = null): Response
    {
        $response = $this->clienteService->update($this->request->getBody(), $id);
        return $this->response->setJSON($response);
    }

    public function delete($id = null): Response
    {
        $response = $this->clienteService->delete($id);
        return $this->response->setJSON($response);
    }
}
