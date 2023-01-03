<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateContatoTable extends Migration
{
    public function up()
    {
        $fields = [
            'id' => [
                'type' => 'INT',
                'auto_increment' => true,
                'unsigned' => true
            ],
            'email' => [
                'type' => 'VARCHAR',
                'constraint' => 100,
                'unique' => true
            ],
            'telefone' => [
                'type' => 'VARCHAR',
                'constraint' => 20
            ]
        ];

        $this->forge->addField($fields);
        $this->forge->addPrimaryKey('id');
        $this->forge->createTable('contatos', true, ['engine' => 'innodb']);
    }

    public function down()
    {
        $this->forge->dropTable('contatos');
    }
}
