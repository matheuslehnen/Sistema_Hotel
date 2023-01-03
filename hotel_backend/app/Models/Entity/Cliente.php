<?php

namespace App\Models\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Cliente
 *
 * @ORM\Table(name="clientes", indexes={@ORM\Index(name="clientes_id_contato_foreign", columns={"id_contato"}), @ORM\Index(name="clientes_id_usuario_foreign", columns={"id_usuario"}), @ORM\Index(name="clientes_id_endereco_foreign", columns={"id_endereco"})})
 * @ORM\Entity(repositoryClass="App\Models\Repository\ClienteRepository")
 */
class Cliente
{
    /**
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
     * @ORM\Column(name="cpf", type="string", length=11, nullable=false)
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
     * @var \App\Models\Entity\Usuario
     *
     * @ORM\ManyToOne(targetEntity="App\Models\Entity\Usuario")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_usuario", referencedColumnName="id")
     * })
     */
    private $idUsuario;

    /**
     * @param string $nome
     * @param string $cpf
     * @param string $nascimento
     * @param bool $fumante
     * @param Endereco $idEndereco
     * @param Usuario $idUsuario
     * @param Contato $idContato
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


    public function getId(): int
    {
        return $this->id;
    }

    public function setId(int $id): void
    {
        $this->id = $id;
    }

    public function getNome(): string
    {
        return $this->nome;
    }

    public function setNome(string $nome): void
    {
        $this->nome = $nome;
    }

    public function getCpf(): string
    {
        return $this->cpf;
    }

    public function setCpf(string $cpf): void
    {
        $this->cpf = $cpf;
    }

    public function getNascimento(): string
    {
        return $this->nascimento;
    }

    public function setNascimento(string $nascimento): void
    {
        $this->nascimento = $nascimento;
    }

    public function isFumante(): bool
    {
        return $this->fumante;
    }

    public function setFumante(bool $fumante): void
    {
        $this->fumante = $fumante;
    }

    public function getIdContato(): Contato
    {
        return $this->idContato;
    }

    public function setIdContato(Contato $idContato): void
    {
        $this->idContato = $idContato;
    }

    public function getIdEndereco(): Endereco
    {
        return $this->idEndereco;
    }

    public function setIdEndereco(Endereco $idEndereco): void
    {
        $this->idEndereco = $idEndereco;
    }

    public function getIdUsuario(): Usuario
    {
        return $this->idUsuario;
    }

    public function setIdUsuario(Usuario $idUsuario): void
    {
        $this->idUsuario = $idUsuario;
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
}
