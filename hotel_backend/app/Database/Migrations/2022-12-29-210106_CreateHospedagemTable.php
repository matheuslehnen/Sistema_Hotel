<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateHospedagemTable extends Migration
{
    public function up()
    {
        $fields = [
            'id' => [
                'type' => 'INT',
                'auto_increment' => true,
                'unsigned' => true
            ],
            'diarias' => [
                'type' => 'BIGINT',
                'unsigned' => true
            ],
            'total' => [
                'type' => 'BIGINT',
                'unsigned' => true
            ],
            'id_cliente' => [
                'type' => 'INT',
                'unsigned' => true
            ],
            'id_quarto' => [
                'type' => 'INT',
                'unsigned' => true
            ]
        ];
        $this->forge->addField($fields);
        $this->forge->addPrimaryKey('id');
        $this->forge->addForeignKey('id_cliente', 'clientes', 'id');
        $this->forge->addForeignKey('id_quarto', 'quartos', 'id');
        $this->forge->createTable('hospedagens', true, ['engine' => 'innodb']);
    }

    public function down()
    {
        $this->forge->dropTable('hospedagens');
    }
}
