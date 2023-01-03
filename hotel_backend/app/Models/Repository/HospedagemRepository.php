<?php

namespace App\Models\Repository;

use App\Models\Entity\Hospedagem;
use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Mapping\ClassMetadata;

class HospedagemRepository extends EntityRepository
{


    public function __construct($em, ClassMetadata $class)
    {
        parent::__construct($em, $class);
    }

    public function listarTodos()
    {
        return $this->findAll();
    }

    public function listarPorId($id)
    {
        return $this->find($id);
    }

    public function save(Hospedagem $hospedagem)
    {
        $this->getEntityManager()->persist($hospedagem);
        $this->getEntityManager()->flush();

        return $this->find($hospedagem->getId());
    }

    public function update(Hospedagem $hospedagem)
    {
        $this->getEntityManager()->merge($hospedagem);
        $this->getEntityManager()->flush();

        return $this->find($hospedagem->getId());
    }

    public function delete(Hospedagem $hospedagem)
    {
        $this->getEntityManager()->remove($hospedagem);
        $this->getEntityManager()->flush();

        return $hospedagem->getId() == null;
    }
}
