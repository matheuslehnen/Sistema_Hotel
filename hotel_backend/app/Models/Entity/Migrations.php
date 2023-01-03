<?php

namespace App\Models\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Migrations
 *
 * @ORM\Table(name="migrations")
 * @ORM\Entity
 */
class Migrations
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="bigint", nullable=false, options={"unsigned"=true})
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="version", type="string", length=255, nullable=false)
     */
    private $version;

    /**
     * @var string
     *
     * @ORM\Column(name="class", type="string", length=255, nullable=false)
     */
    private $class;

    /**
     * @var string
     *
     * @ORM\Column(name="group", type="string", length=255, nullable=false)
     */
    private $group;

    /**
     * @var string
     *
     * @ORM\Column(name="namespace", type="string", length=255, nullable=false)
     */
    private $namespace;

    /**
     * @var int
     *
     * @ORM\Column(name="time", type="integer", nullable=false)
     */
    private $time;

    /**
     * @var int
     *
     * @ORM\Column(name="batch", type="integer", nullable=false, options={"unsigned"=true})
     */
    private $batch;



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
     * Set version.
     *
     * @param string $version
     *
     * @return Migrations
     */
    public function setVersion($version)
    {
        $this->version = $version;

        return $this;
    }

    /**
     * Get version.
     *
     * @return string
     */
    public function getVersion()
    {
        return $this->version;
    }

    /**
     * Set class.
     *
     * @param string $class
     *
     * @return Migrations
     */
    public function setClass($class)
    {
        $this->class = $class;

        return $this;
    }

    /**
     * Get class.
     *
     * @return string
     */
    public function getClass()
    {
        return $this->class;
    }

    /**
     * Set group.
     *
     * @param string $group
     *
     * @return Migrations
     */
    public function setGroup($group)
    {
        $this->group = $group;

        return $this;
    }

    /**
     * Get group.
     *
     * @return string
     */
    public function getGroup()
    {
        return $this->group;
    }

    /**
     * Set namespace.
     *
     * @param string $namespace
     *
     * @return Migrations
     */
    public function setNamespace($namespace)
    {
        $this->namespace = $namespace;

        return $this;
    }

    /**
     * Get namespace.
     *
     * @return string
     */
    public function getNamespace()
    {
        return $this->namespace;
    }

    /**
     * Set time.
     *
     * @param int $time
     *
     * @return Migrations
     */
    public function setTime($time)
    {
        $this->time = $time;

        return $this;
    }

    /**
     * Get time.
     *
     * @return int
     */
    public function getTime()
    {
        return $this->time;
    }

    /**
     * Set batch.
     *
     * @param int $batch
     *
     * @return Migrations
     */
    public function setBatch($batch)
    {
        $this->batch = $batch;

        return $this;
    }

    /**
     * Get batch.
     *
     * @return int
     */
    public function getBatch()
    {
        return $this->batch;
    }
}
