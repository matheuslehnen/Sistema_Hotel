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
        $hospedagensDto = $this->hospedagemService->listarTodos();
        return $this->response->setJSON($hospedagensDto);
    }

    public function show($id = null)
    {
        $hospedagemDto = $this->hospedagemService->listarPorId($id);
        return $this->response->setJSON($hospedagemDto);
    }

    public function create()
    {
        $hospedagemDto = $this->hospedagemService->save($this->request->getBody());
        return $this->response->setJSON($hospedagemDto);
    }

    public function update($id = null)
    {
        $hospedagemDto = $this->hospedagemService->update($this->request->getBody(), $id);
        return $this->response->setJSON($hospedagemDto);
    }

    public function delete($id = null)
    {
        $hospedagemDto = $this->hospedagemService->delete($id);
        return $this->response->setJSON($hospedagemDto);
    }


}
