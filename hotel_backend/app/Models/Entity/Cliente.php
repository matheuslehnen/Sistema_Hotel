<?php

namespace App\Models\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Cliente
 *
 * @ORM\Table(name="clientes", indexes={@ORM\Index(name="clientes_id_endereco_foreign", columns={"id_endereco"}), @ORM\Index(name="clientes_id_contato_foreign", columns={"id_contato"})})
 * @ORM\Entity
 */
class Cliente
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
     * @ORM\Column(name="nome", type="string", length=100, nullable=false)
     */
    private $nome;

    /**
     * @var string
     *
     * @ORM\Column(name="cpf", type="string", length=14, nullable=false)
     */
    private $cpf;

    /**
     * @var string
     *
     * @ORM\Column(name="nascimento", type="string", length=10, nullable=false)
     */
    private $nascimento;

    /**
     * @var bool
     *
     * @ORM\Column(name="fumante", type="boolean", nullable=false)
     */
    private $fumante;

    /**
     * @var \App\Models\Entity\Contato
     *
     * @ORM\ManyToOne(targetEntity="App\Models\Entity\Contato")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_contato", referencedColumnName="id")
     * })
     */
    private $idContato;

    /**
     * @var \App\Models\Entity\Endereco
     *
     * @ORM\ManyToOne(targetEntity="App\Models\Entity\Endereco")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_endereco", referencedColumnName="id")
     * })
     */
    private $idEndereco;

    /**
     * @param string $nome
     * @param string $cpf
     * @param string $nascimento
     * @param bool $fumante
     * @param Contato $idContato
     * @param Endereco $idEndereco
     */
    public function __construct(string $nome, string $cpf, string $nascimento, bool $fumante, Contato $idContato, Endereco $idEndereco)
    {
        $this->nome = $nome;
        $this->cpf = $cpf;
        $this->nascimento = $nascimento;
        $this->fumante = $fumante;
        $this->idContato = $idContato;
        $this->idEndereco = $idEndereco;
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
     * Set nome.
     *
     * @param string $nome
     *
     * @return Cliente
     */
    public function setNome($nome)
    {
        $this->nome = $nome;

        return $this;
    }

    /**
     * Get nome.
     *
     * @return string
     */
    public function getNome()
    {
        return $this->nome;
    }

    /**
     * Set cpf.
     *
     * @param string $cpf
     *
     * @return Cliente
     */
    public function setCpf($cpf)
    {
        $this->cpf = $cpf;

        return $this;
    }

    /**
     * Get cpf.
     *
     * @return string
     */
    public function getCpf()
    {
        return $this->cpf;
    }

    /**
     * Set nascimento.
     *
     * @param string $nascimento
     *
     * @return Cliente
     */
    public function setNascimento($nascimento)
    {
        $this->nascimento = $nascimento;

        return $this;
    }

    /**
     * Get nascimento.
     *
     * @return string
     */
    public function getNascimento()
    {
        return $this->nascimento;
    }

    /**
     * Set fumante.
     *
     * @param bool $fumante
     *
     * @return Cliente
     */
    public function setFumante($fumante)
    {
        $this->fumante = $fumante;

        return $this;
    }

    /**
     * Get fumante.
     *
     * @return bool
     */
    public function getFumante()
    {
        return $this->fumante;
    }

    /**
     * Set idContato.
     *
     * @param \App\Models\Entity\Contato|null $idContato
     *
     * @return Cliente
     */
    public function setIdContato(\App\Models\Entity\Contato $idContato = null)
    {
        $this->idContato = $idContato;

        return $this;
    }

    /**
     * Get idContato.
     *
     * @return \App\Models\Entity\Contato|null
     */
    public function getIdContato()
    {
        return $this->idContato;
    }

    /**
     * Set idEndereco.
     *
     * @param \App\Models\Entity\Endereco|null $idEndereco
     *
     * @return Cliente
     */
    public function setIdEndereco(\App\Models\Entity\Endereco $idEndereco = null)
    {
        $this->idEndereco = $idEndereco;

        return $this;
    }

    /**
     * Get idEndereco.
     *
     * @return \App\Models\Entity\Endereco|null
     */
    public function getIdEndereco()
    {
        return $this->idEndereco;
    }
}
