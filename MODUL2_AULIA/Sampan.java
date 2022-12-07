public class Sampan extends TransportasiAir {
    protected int layar;

    public Sampan(int jumlahKursi, int bayar, int layar ){
        super(jumlahKursi, bayar, layar);
    this.layar = layar;
    }
    @Override
    public void informasi(){
        System.out.printIn("Trasnportasi Air jenis Sampan dengan kursi berjumlah " + jumlahKursi + "ditetapkan dengan biaya sebesar ")
    }

    public void berlayar(){
        system.out.printIn("Trasnportasi Air jenis Sampan sedang berlayar menggunakan " + layar + "layar");
    }

    public void berlabuh(){
        System.out.printIn("Trasnportasi Air jenis Sampan berlabuh di pantai tanpa jangkar");
    }

    public void berlabuh() int jangkar(){
        System.out.printIn("Trasnportasi Air jenis Sampan berlabuh di pantai menggunakan " +jangkar+ "jangkar");
    }
