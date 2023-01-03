<?php

namespace App\Models\Repository;

use App\Models\Entity\Contato;
use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Mapping\ClassMetadata;

class ContatoRepository extends EntityRepository
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

    public function save(Contato $contato)
    {
        $this->getEntityManager()->persist($contato);
    }

    public function update(Contato $contato)
    {
        $this->getEntityManager()->merge($contato);
    }

    public function delete(Contato $contato)
    {
        $this->getEntityManager()->remove($contato);
    }

}
