<?php

namespace App\Models\Repository;

use App\Models\Entity\Cliente;
use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Mapping\ClassMetadata;

class ClienteRepository extends EntityRepository
{


    public function __construct($em, ClassMetadata $class)
    {
        parent::__construct($em, $class);
    }

    public function listarTodos(): array
    {
        return $this->findAll();
    }

    public function listarPorId($id)
    {
        return $this->find($id);
    }

    public function listaPorCpf($cpf){
        return $this->findOneBy(['cpf' => $cpf]);
    }

    public function save(Cliente $cliente)
    {
        $this->getEntityManager()->persist($cliente);
        $this->getEntityManager()->flush();

        return $this->find($cliente->getId());
    }

    public function update(Cliente $cliente)
    {
        $this->getEntityManager()->merge($cliente);
        $this->getEntityManager()->flush();

        return $this->find($cliente->getId());
    }

    public function delete(Cliente $cliente)
    {
        $this->getEntityManager()->remove($cliente);
        $this->getEntityManager()->flush();
    }
}
