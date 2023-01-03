<?php

namespace App\Models\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Hospedagem
 *
 * @ORM\Table(name="hospedagens", indexes={@ORM\Index(name="hospedagens_id_quarto_foreign", columns={"id_quarto"}), @ORM\Index(name="hospedagens_id_cliente_foreign", columns={"id_cliente"})})
 * @ORM\Entity
 */
class Hospedagem
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
     * @var int
     *
     * @ORM\Column(name="diarias", type="bigint", nullable=false, options={"unsigned"=true})
     */
    private $diarias;

    /**
     * @var int
     *
     * @ORM\Column(name="total", type="bigint", nullable=false, options={"unsigned"=true})
     */
    private $total;

    /**
     * @var \App\Models\Entity\Cliente
     *
     * @ORM\ManyToOne(targetEntity="App\Models\Entity\Cliente")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_cliente", referencedColumnName="id")
     * })
     */
    private $idCliente;

    /**
     * @var \App\Models\Entity\Quarto
     *
     * @ORM\ManyToOne(targetEntity="App\Models\Entity\Quarto")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_quarto", referencedColumnName="id")
     * })
     */
    private $idQuarto;

    /**
     * @param int $diarias
     * @param int $total
     * @param Cliente $idCliente
     * @param Quarto $idQuarto
     */
    public function __construct(int $diarias, int $total, Cliente $idCliente, Quarto $idQuarto)
    {
        $this->diarias = $diarias;
        $this->total = $total;
        $this->idCliente = $idCliente;
        $this->idQuarto = $idQuarto;
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
     * Set diarias.
     *
     * @param int $diarias
     *
     * @return Hospedagem
     */
    public function setDiarias($diarias)
    {
        $this->diarias = $diarias;

        return $this;
    }

    /**
     * Get diarias.
     *
     * @return int
     */
    public function getDiarias()
    {
        return $this->diarias;
    }

    /**
     * Set total.
     *
     * @param int $total
     *
     * @return Hospedagem
     */
    public function setTotal($total)
    {
        $this->total = $total;

        return $this;
    }

    /**
     * Get total.
     *
     * @return int
     */
    public function getTotal()
    {
        return $this->total;
    }

    /**
     * Set idCliente.
     *
     * @param \App\Models\Entity\Cliente|null $idCliente
     *
     * @return Hospedagem
     */
    public function setIdCliente(\App\Models\Entity\Cliente $idCliente = null)
    {
        $this->idCliente = $idCliente;

        return $this;
    }

    /**
     * Get idCliente.
     *
     * @return \App\Models\Entity\Cliente|null
     */
    public function getIdCliente()
    {
        return $this->idCliente;
    }

    /**
     * Set idQuarto.
     *
     * @param \App\Models\Entity\Quarto|null $idQuarto
     *
     * @return Hospedagem
     */
    public function setIdQuarto(\App\Models\Entity\Quarto $idQuarto = null)
    {
        $this->idQuarto = $idQuarto;

        return $this;
    }

    /**
     * Get idQuarto.
     *
     * @return \App\Models\Entity\Quarto|null
     */
    public function getIdQuarto()
    {
        return $this->idQuarto;
    }
}
