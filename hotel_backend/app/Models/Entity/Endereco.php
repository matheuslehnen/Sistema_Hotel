<?php

namespace App\Models\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Endereco
 *
 * @ORM\Table(name="enderecos")
 * @ORM\Entity
 */
class Endereco
{
    /**
     * @var int
     *
     *
     * @ORM\Column(name="id", type="integer", nullable=false, options={"unsigned"=true})
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="cep", type="string", length=9, nullable=false)
     */
    private $cep;

    /**
     * @var string
     *
     * @ORM\Column(name="logradouro", type="string", length=100, nullable=false)
     */
    private $logradouro;

    /**
     * @var string
     *
     * @ORM\Column(name="numero", type="string", length=100, nullable=false)
     */
    private $numero;

    /**
     * @var string
     *
     * @ORM\Column(name="bairro", type="string", length=100, nullable=false)
     */
    private $bairro;

    /**
     * @var string
     *
     * @ORM\Column(name="localidade", type="string", length=100, nullable=false)
     */
    private $localidade;

    /**
     * @var string
     *
     * @ORM\Column(name="uf", type="string", length=2, nullable=false)
     */
    private $uf;

    /**
     * @param string $cep
     * @param string $logradouro
     * @param string $numero
     * @param string $bairro
     * @param string $localidade
     * @param string $uf
     */
    public function __construct(string $cep, string $logradouro, string $numero, string $bairro, string $localidade, string $uf)
    {
        $this->cep = $cep;
        $this->logradouro = $logradouro;
        $this->numero = $numero;
        $this->bairro = $bairro;
        $this->localidade = $localidade;
        $this->uf = $uf;
    }


    /**
     * Get id.
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set cep.
     *
     * @param string $cep
     *
     * @return Endereco
     */
    public function setCep($cep)
    {
        $this->cep = $cep;

        return $this;
    }

    /**
     * Get cep.
     *
     * @return string
     */
    public function getCep()
    {
        return $this->cep;
    }

    /**
     * Set logradouro.
     *
     * @param string $logradouro
     *
     * @return Endereco
     */
    public function setLogradouro($logradouro)
    {
        $this->logradouro = $logradouro;

        return $this;
    }

    /**
     * Get logradouro.
     *
     * @return string
     */
    public function getLogradouro()
    {
        return $this->logradouro;
    }

    /**
     * Set numero.
     *
     * @param string $numero
     *
     * @return Endereco
     */
    public function setNumero($numero)
    {
        $this->numero = $numero;

        return $this;
    }

    /**
     * Get numero.
     *
     * @return string
     */
    public function getNumero()
    {
        return $this->numero;
    }

    /**
     * Set bairro.
     *
     * @param string $bairro
     *
     * @return Endereco
     */
    public function setBairro($bairro)
    {
        $this->bairro = $bairro;

        return $this;
    }

    /**
     * Get bairro.
     *
     * @return string
     */
    public function getBairro()
    {
        return $this->bairro;
    }

    /**
     * Set localidade.
     *
     * @param string $localidade
     *
     * @return Endereco
     */
    public function setLocalidade($localidade)
    {
        $this->localidade = $localidade;

        return $this;
    }

    /**
     * Get localidade.
     *
     * @return string
     */
    public function getLocalidade()
    {
        return $this->localidade;
    }

    /**
     * Set uf.
     *
     * @param string $uf
     *
     * @return Endereco
     */
    public function setUf($uf)
    {
        $this->uf = $uf;

        return $this;
    }

    /**
     * Get uf.
     *
     * @return string
     */
    public function getUf()
    {
        return $this->uf;
    }
}
