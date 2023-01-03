<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateClienteTable extends Migration
{
    public function up()
    {
        $fields = [
            'id' => [
                'type' => 'INT',
                'auto_increment' => true,
                'unsigned' => true
            ],
            'nome' => [
                'type' => 'VARCHAR',
                'constraint' => 100,
            ],
            'cpf' => [
                'type' => 'VARCHAR',
                'constraint' => 11
            ],
            'nascimento'=> [
                'type' => 'VARCHAR',
                'constraint' => 10
            ],
            'fumante'=> [
                'type' => 'BOOLEAN'
            ],
            'id_endereco' => [
                'type' => 'INT',
                'unsigned' => true
            ],
            'id_contato' => [
                'type' => 'INT',
                'unsigned' => true
            ],
            'id_usuario' => [
                'type' => 'INT',
                'unsigned' => true
            ]
        ];
        $this->forge->addField($fields);
        $this->forge->addPrimaryKey('id');
        $this->forge->addForeignKey('id_endereco', 'enderecos', 'id');
        $this->forge->addForeignKey('id_contato', 'contatos', 'id');
        $this->forge->addForeignKey('id_usuario', 'usuarios', 'id');
        $this->forge->createTable('clientes', true, ['engine' => 'innodb']);
    }

    public function down()
    {
       $this->forge->dropTable('clientes');
    }
}
