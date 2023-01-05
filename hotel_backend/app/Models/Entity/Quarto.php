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
     * @ORM\Column(name="localizacao", type="string", length=5, nullable=false)
     */
    private $localizacao;

    /**
     * @var string
     *
     * @ORM\Column(name="tipo", type="string", length=20, nullable=false)
     */
    private $tipo;

    /**
     * @var int
     *
     * @ORM\Column(name="valor", type="bigint", nullable=false, options={"unsigned"=true})
     */
    private $valor;

    /**
     * @var bool
     *
     * @ORM\Column(name="permite_fumante", type="boolean", nullable=false)
     */
    private $permiteFumante;

    /**
     * @var string
     *
     * @ORM\Column(name="situacao", type="string", length=7, nullable=false)
     */
    private $situacao;

    /**
     * @param string $localizacao
     * @param string $tipo
     * @param int $valor
     * @param bool $permiteFumante
     * @param string $situacao
     */
    public function __construct(string $localizacao, string $tipo, int $valor, bool $permiteFumante, string $situacao)
    {
        $this->localizacao = $localizacao;
        $this->tipo = $tipo;
        $this->valor = $valor;
        $this->permiteFumante = $permiteFumante;
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
     * @return Quartos
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
     * Set tipo.
     *
     * @param string $tipo
     *
     * @return Quartos
     */
    public function setTipo($tipo)
    {
        $this->tipo = $tipo;

        return $this;
    }

    /**
     * Get tipo.
     *
     * @return string
     */
    public function getTipo()
    {
        return $this->tipo;
    }

    /**
     * Set valor.
     *
     * @param int $valor
     *
     * @return Quartos
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
     * Set permiteFumante.
     *
     * @param bool $permiteFumante
     *
     * @return Quartos
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
     * Set situacao.
     *
     * @param string $situacao
     *
     * @return Quartos
     */
    public function setSituacao($situacao)
    {
        $this->situacao = $situacao;

        return $this;
    }

    /**
     * Get situacao.
     *
     * @return string
     */
    public function getSituacao()
    {
        return $this->situacao;
    }
}
