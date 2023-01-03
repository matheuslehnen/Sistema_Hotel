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
        header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    }

    public function index(): Response
    {
        $quartosDto = $this->quartoService->listarTodos();
        return $this->response->setJSON($quartosDto);
    }

    public function show($id = null): Response
    {
        $quartoDto = $this->quartoService->listarUm($id);
        return $this->response->setJSON($quartoDto);
    }

    public function create(): Response
    {
        $quartoDto = $this->quartoService->save($this->request->getBody());
        return $this->response->setJSON($quartoDto);
    }

    public function update($id = null)
    {
        $quartoDto = $this->quartoService->update($this->request->getBody(), $id);
        return $this->response->setJSON($quartoDto);
    }

    public function delete($id = null)
    {
        $quarto = $this->quartoService->delete($id);
        return $this->response->setJSON($quarto);
    }
}