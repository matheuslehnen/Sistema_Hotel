<?php

namespace App\Models\Repository;

use App\Models\Entity\Usuario;
use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Mapping\ClassMetadata;

class UsuarioRepository extends EntityRepository
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

    public function listarPorLogin($login)
    {
        return $this->findOneBy(['login' => $login]);
    }

    public function save(Usuario $usuario)
    {
        $this->getEntityManager()->persist($usuario);
        $this->getEntityManager()->flush();

        return $this->find($usuario->getId());
    }


    public function update (Usuario $usuario)
    {
        $this->getEntityManager()->merge($usuario);
        $this->getEntityManager()->flush();

        return $this->find($usuario->getId());
    }

    public function delete(Usuario $usuario)
    {
        $this->getEntityManager()->remove($usuario);
    }

}
