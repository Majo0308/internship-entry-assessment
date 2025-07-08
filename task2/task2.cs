using System;

namespace EjemploUML
{
    public abstract class A
    {
        protected string Name;
        public void PrintName()
        {
            Console.WriteLine(Name);
        }
    }

    public class B : A
    {
        //private void PrintName(string message)
        protected void PrintName(string message)
        {
            Name = message;
            base.PrintName();
        }
    }

    public class C : B
    {
        public new void PrintName(string message)
        {
            base.PrintName(message);
        }
    }

    public class D : A
    {
        public D(string name)
        {
            this.Name = name;
        }
    }

    class Program
    {
        static void Main()
        {
            var c = new C();
            c.PrintName("¡Hola desde C!");   // Imprime "¡Hola desde C!"

            var d = new D("Nombre en D");
            d.PrintName();                    // Imprime "Nombre en D"
        }
    }
}