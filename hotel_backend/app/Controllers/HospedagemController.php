<?php

namespace App\Controllers;

use App\Libraries\Services\HospedagemService;
use CodeIgniter\HTTP\Response;
use CodeIgniter\RESTful\ResourceController;

class HospedagemController extends ResourceController
{

    private HospedagemService $hospedagemService;

    public function __construct()
    {
        $this->hospedagemService = new HospedagemService();
    }

    public function index(): Response
    {
        $response = $this->hospedagemService->listarTodos();
        return $this->response->setJSON($response);
    }

    public function show($id = null)
    {
        $response = $this->hospedagemService->listarPorId($id);
        return $this->response->setJSON($response);
    }

    public function create()
    {
        $response = $this->hospedagemService->save($this->request->getBody());
        return $this->response->setJSON($response);
    }

    public function update($id = null)
    {
        $response = $this->hospedagemService->update($this->request->getBody(), $id);
        return $this->response->setJSON($response);
    }

    public function delete($id = null)
    {
        $response = $this->hospedagemService->delete($id);
        return $this->response->setJSON($response);
    }


}
