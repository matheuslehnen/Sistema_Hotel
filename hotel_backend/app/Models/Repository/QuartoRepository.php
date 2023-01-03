<?php

namespace App\Models\Repository;

use App\Models\Entity\Quarto;
use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Mapping\ClassMetadata;

class QuartoRepository extends EntityRepository
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

    public function save(Quarto $quarto)
    {
        $this->getEntityManager()->persist($quarto);
        $this->getEntityManager()->flush();

        return $this->find($quarto->getId());
    }

    public function update(Quarto $quarto)
    {
        $this->getEntityManager()->merge($quarto);
        $this->getEntityManager()->flush();

        return $this->find($quarto->getId());
    }

    public function delete(Quarto $quarto)
    {
        $this->getEntityManager()->remove($quarto);
        $this->getEntityManager()->flush();

        return $quarto->getId() == null;
    }
}
