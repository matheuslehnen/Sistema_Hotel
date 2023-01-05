<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateQuartoTable extends Migration
{
    public function up()
    {
        $fields = [
            'id' => [
                'type' => 'INT',
                'auto_increment' => true,
                'unsigned'       => true,
            ],
            'localizacao' => [
                'type' => 'VARCHAR',
                'constraint' => 5
            ],
            'tipo' => [
                'type' => 'VARCHAR',
                'constraint' => 20
            ],
            'valor' => [
                'type' => 'BIGINT',
                'unsigned' => true,
            ],
            'permite_fumante' => [
                'type' => 'BOOLEAN',
            ],
            'situacao' => [
                'type' => 'VARCHAR',
                'constraint' => 7
            ]
        ];
        $this->forge->addField($fields);
        $this->forge->addPrimaryKey('id');
        $this->forge->createTable('quartos', true, ['engine' => 'innodb']);
    }

    public function down()
    {
        $this->forge->dropTable('quartos');
    }
}
