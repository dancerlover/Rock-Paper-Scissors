import java.util.Scanner;
public class sample
{
    public static void main(String[] args) 
    {
      Scanner sc=new Scanner(System.in);
      int n=sc.nextInt(),i,x=0;
      for(i=1;i<=n;i++)
      {
        i+=i;
        x=i;
      }     
      System.out.print(x);  
    }
}