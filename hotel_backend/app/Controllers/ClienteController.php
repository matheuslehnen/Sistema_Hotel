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
        header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    }


    public function index(): Response
    {
        $clientesDto = $this->clienteService->listarTodos();
        return $this->response->setJSON($clientesDto);
    }

    public function show($id = null): Response
    {
       $clienteDto = $this->clienteService->listarPorId($id);
       return $this->response->setJSON($clienteDto);
    }

    public function create(): Response
    {
       $clienteDto = $this->clienteService->save($this->request->getBody());
       return $this->response->setJSON($clienteDto);
    }

    public function update($id = null): Response
    {
        $clienteDto = $this->clienteService->update($this->request->getBody(), $id);
        return $this->response->setJSON($clienteDto);
    }

    public function delete($id = null): Response
    {
        $clienteDto = $this->clienteService->delete($id);
        return $this->response->setJSON($clienteDto);
    }
}
