<?php

namespace App\Models\Repository;

use App\Models\Entity\Endereco;
use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Mapping\ClassMetadata;

class EnderecoRepository extends EntityRepository
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

    public function save(Endereco $endereco)
    {
        $this->getEntityManager()->persist($endereco);
    }

    public function update(Endereco $endereco)
    {
        $this->getEntityManager()->merge($endereco);
    }

    public function delete(Endereco $endereco)
    {
        $this->getEntityManager()->remove($endereco);
    }
}
