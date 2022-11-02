public class DataMenu {
    public static void main(String[] args)
    {

        Scanner scan = new Scanner(System.in);

        System.out.printIn("SELAMAT DATANG DIRESTURANT EAD")
        System.out.println("MENU MAKANAN : ");
        System.out.println("___________________________________________________________________");
        System.out.println("No Nama             Harga");
        System.out.println("1. Bakso (Makanan)          Rp 10000");
        System.out.println("2. Es Teh (Minuman)         Rp 5000");
        System.out.println("3. Brownies (Dessert)       Rp 15000");
        System.out.println("");


        int harga = 0;

        int h1 = 10000, h2 = 5000, h3 = 15000;
        String menu;

        for (String i = "Y"; i.equals("Y")||i.equals("y"); )
        {
        System.out.println("___________________________________________________________________");

        System.out.print("Masukkan Nomor Pesanan : ");
        int inNomor = scan.nextInt();
        System.out.println("___________________________________________________________________");

        if (inNomor == 1)
        {

            menu = " Bakso";
            System.out.println("Pilihan anda nomor " +inNomor + menu);
            harga = harga + h1;
        }
            else if (inNomor == 2)
            {

                menu = "Es Teh";
                System.out.println("Pilihan anda nomor " +inNomor + menu);
                harga = harga + h2;
            }
                else if (inNomor == 3)
                {

                    menu = " Brownies";
                    System.out.println("Pilihan anda nomor " +inNomor + menu);
                    harga = harga + h3;
                }
                     else

                    {
                        System.out.println("Nomor yang dipilih tidak ada di menu.");
                    }


            System.out.println("Apakah anda mau melanjutkan? Y/T");
            i = scan.next();

        }
        System.out.println("___________________________________________________________________");
        System.out.println("Total pembayaran sebesar " +harga+".");
        System.out.println("Terimakasih atas kunjungannya.");
    }
}