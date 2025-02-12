import java.util.Arrays;
import java.util.Scanner;

public class bubblesort{

    /*
     * best case time complexity: O(n)
     * average case time complexity : O(n^2)
     * worst case time complexity : O(n^2)
     * 
     * space complexity : O(1)
     */

    public static void BubbleSort(int ar[]){
        int l=ar.length,count=0;
        System.out.print("\n\n\t\tThe value of array is\n\n\t\t:");
        for(int it:ar){
            System.out.print("\t"+it);
        }
        for(int i=0;i<l;i++){
            boolean swapped=false;
            for(int j=0;j<l-i-1;j++){
                if(ar[j]>ar[j+1]){
                    ar[j]=ar[j]+ar[j+1];
                    ar[j+1]=ar[j]-ar[j+1];
                    ar[j]=ar[j]-ar[j+1];
                    swapped=true;
                }
                System.out.print("\n\n\t\tThe value of array during "+(count++)+" sort is \n\n\t\t\t: ");
                for(int it:ar){
                    System.out.print(it+"\t");
                }
            }
            if(!swapped) break;
        }
    }
    public static void main(String[] args){
        bubblesort.BubbleSort(new int[]{2,4,3,6,7,9,1});
        bubblesort.BubbleSort(new int[]{1,2,3,4,5,6,7});
    }
}