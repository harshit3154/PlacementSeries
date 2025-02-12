import java.lang.*;
public class SelectionSort {
    /*
     * best case time complexity: O(n)
     * average case time complexity : O(n^2)
     * worst case time complexity : O(n^2)
     * 
     * space complexity : O(1)
     */

    public static void display(int ar[]){
        System.out.print("\n\n\n\t\tThe element of the array are\n\n\n\t\t\t:");
        for(int it:ar){
            System.out.print(it+"\t");
        }
    }

    public static void selectionSort(int ar[],int l){
        SelectionSort.display(ar);
        for(int i=0;i<l;i++){
            int index=i;
            boolean swapped=false;
            for(int j=i+1;j<l;j++){
                if(ar[j]<ar[index]){
                    index=j;
                    swapped=true;
                }
            }
            ar[i]=ar[i]+ar[index];
            ar[index]=ar[i]-ar[index];
            ar[i]=ar[i]-ar[index];
            if(!swapped) break;
        }
        SelectionSort.display(ar);
    }
    public static void main(String[] arg){
        SelectionSort.selectionSort(new int[]{5,4,8,6,1,2,3,4},8);
    }
    
}
