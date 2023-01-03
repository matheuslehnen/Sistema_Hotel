<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateEnderecoTable extends Migration
{
    public function up()
    {
       $fields = [
           'id' => [
               'type' => 'INT',
               'auto_increment' => true,
               'unsigned' => true
           ],
           'cep' => [
               'type' => 'VARCHAR',
               'constraint' => 8
           ],
           'logradouro' => [
               'type' => 'VARCHAR',
               'constraint' => 100
           ],
           'numero' => [
               'type' => 'INT'
           ],
           'bairro' => [
               'type' => 'VARCHAR',
               'constraint' => 100,
           ],
           'localidade' => [
               'type' => 'VARCHAR',
               'constraint' => 100
           ],
           'uf' => [
               'type' => 'VARCHAR',
               'constraint' => 2
           ]
       ];

       $this->forge->addField($fields);
       $this->forge->addPrimaryKey('id');
       $this->forge->createTable('enderecos', true, ['engine' => 'innodb']);
    }

    public function down()
    {
        $this->forge->dropTable('enderecos');
    }
}
