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
                'constraint' => 50
            ],
            'permite_fumante' => [
                'type' => 'BOOLEAN',
            ],
            'valor' => [
                'type' => 'BIGINT',
                'unsigned' => true,
            ],
            'capacidade' => [
                'type' => 'BIGINT',
                'unsigned' => true
            ],
            'situacao' => [
                'type' => 'BOOLEAN',
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
