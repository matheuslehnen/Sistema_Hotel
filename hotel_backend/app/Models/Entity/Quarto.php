<?php

namespace App\Models\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Quarto
 *
 * @ORM\Table(name="quartos")
 * @ORM\Entity
 */
class Quarto
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer", nullable=false, options={"unsigned"=true})
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="localizacao", type="string", length=50, nullable=false)
     */
    private $localizacao;

    /**
     * @var bool
     *
     * @ORM\Column(name="permite_fumante", type="boolean", nullable=false)
     */
    private $permiteFumante;

    /**
     * @var int
     *
     * @ORM\Column(name="valor", type="bigint", nullable=false, options={"unsigned"=true})
     */
    private $valor;

    /**
     * @var int
     *
     * @ORM\Column(name="capacidade", type="bigint", nullable=false, options={"unsigned"=true})
     */
    private $capacidade;

    /**
     * @var bool
     *
     * @ORM\Column(name="situacao", type="boolean", nullable=false)
     */
    private $situacao;

    /**
     * @param string $localizacao
     * @param bool $permiteFumante
     * @param int $
     * @param int $capacidade
     * @param bool $situacao
     */
    public function __construct(string $localizacao, bool $permiteFumante, int $valor, int $capacidade, bool $situacao)
    {
        $this->localizacao = $localizacao;
        $this->permiteFumante = $permiteFumante;
        $this->valor = $valor;
        $this->capacidade = $capacidade;
        $this->situacao = $situacao;
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
     * Set localizacao.
     *
     * @param string $localizacao
     *
     * @return Quarto
     */
    public function setLocalizacao($localizacao)
    {
        $this->localizacao = $localizacao;

        return $this;
    }

    /**
     * Get localizacao.
     *
     * @return string
     */
    public function getLocalizacao()
    {
        return $this->localizacao;
    }

    /**
     * Set permiteFumante.
     *
     * @param bool $permiteFumante
     *
     * @return Quarto
     */
    public function setPermiteFumante($permiteFumante)
    {
        $this->permiteFumante = $permiteFumante;

        return $this;
    }

    /**
     * Get permiteFumante.
     *
     * @return bool
     */
    public function getPermiteFumante()
    {
        return $this->permiteFumante;
    }

    /**
     * Set valor.
     *
     * @param int $valor
     *
     * @return Quarto
     */
    public function setValor($valor)
    {
        $this->valor = $valor;

        return $this;
    }

    /**
     * Get valor.
     *
     * @return int
     */
    public function getValor()
    {
        return $this->valor;
    }

    /**
     * Set capacidade.
     *
     * @param int $capacidade
     *
     * @return Quarto
     */
    public function setCapacidade($capacidade)
    {
        $this->capacidade = $capacidade;

        return $this;
    }

    /**
     * Get capacidade.
     *
     * @return int
     */
    public function getCapacidade()
    {
        return $this->capacidade;
    }

    /**
     * Set situacao.
     *
     * @param bool $situacao
     *
     * @return Quarto
     */
    public function setSituacao($situacao)
    {
        $this->situacao = $situacao;

        return $this;
    }

    /**
     * Get situacao.
     *
     * @return bool
     */
    public function getSituacao()
    {
        return $this->situacao;
    }
}
