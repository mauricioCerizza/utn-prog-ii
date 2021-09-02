---
title: Apuntes - Conexión a bases de datos
sidebar_label: Conexión a base de datos
slug: /clases/databases/apuntes/databases
hide_table_of_contents: false
hide_title: false
author: 
authorURL: 
---
## ¿Cómo nos conectamos a la base de datos?

+ Instalar paquete 'System.Data.SqlClient':
    + Botón derecho sobre proyecto
    + Administrar Paquete NuGet
    + Examinar
    + Buscar: **SqlClient**
    + Agregar *using System.Data.SqlClient*
+ Para conectarnos a la base de datos utilizamos la clase **SqlConnection**. Se abre el SqlConnection y se establece como la conexión para el Sql Command. 

```csharp
    SqlConnection connection; // Puente
    SqlCommand command;      // Quien lleva la consulta.
    SqlDataReader reader;   // Quien trae los datos.

    static ConexionSql()
    {
        connection = new SqlConnection(@"Data Source = [Nombre del servidor];
                                    Database = [Nombre de la base de datos];
                                    Trusted_Connection = True;");

        command = new SqlCommand();
        command.CommandType = CommandType.Text;
        command.Connection = connection;
    }
```

+ Una opción para levantar una query es utilizando bloque **Try-Catch-Finally**

```csharp
    try
    {
        command.CommandText = "[query de consulta]";
        connection.Open();
        reader = command.ExecuteReader();

        while (reader.Read())
        {
           // Lógica
        }
    }
    catch (Exception)
    {
        throw new Exception("Error de conexión a la base de datos");
    }
    finally 
    {
        if (connection.State == ConnectionState.Open)
        {
            connection.Close();
        }
    }

```

+ Otra opción es con **using** > cierra automáticamente la conexión.

```csharp
    using (SqlConnection connection = new SqlConnection(connection))  
    {  
        connection.Open();  
        // Lógica
    }  
```


## **Insert - Update - Delete**

+ Debemos utilizar **command.ExecuteNonQuery();** que ejecuta la consulta realizada. Guarda la información en la base de datos. 

:::important IMPORTANTE
Después del command.ExecuteNonQuery es necesario el **command.Clear();**
:::

```csharp
Ejemplo de consulta parametrizada:

    connection.Open();
    SqlCommand sqlCommand = new SqlCommand();
    sqlCommand.CommandType = System.Data.CommandType.Text;
    sqlCommand.Connection = connection;
    sqlCommand.CommandText = "INSERT INTO [nombre_tabla] VALUES (@Name, @LastName, @Age)";
    sqlCommand.Parameters.AddWithValue("@Name", "[Juana]");
    sqlCommand.Parameters.AddWithValue("@LastName", "[Perrosa]");
    sqlCommand.Parameters.AddWithValue("@Age", "9");
    sqlCommand.ExecuteNonQuery();
    sqlCommand.Parameters.Clear();
```