<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateUsuarioTable extends Migration
{
    public function up()
    {
        $fields = [
            'id' => [
                'type' => 'INT',
                'auto_increment' => true,
                'unsigned' => true,
            ],
            'login' => [
               'type' => 'VARCHAR',
               'constraint' => 100,
               'unique' => true
           ],
           'senha' => [
               'type' => 'VARCHAR',
               'constraint' => 8
           ]
    ];
       $this->forge->addField($fields);
       $this->forge->addPrimaryKey('id');
       $this->forge->createTable('usuarios', true, ['engine' => 'innodb']);
    }

    public function down()
    {
        $this->forge->dropTable('usuarios');
    }
}
