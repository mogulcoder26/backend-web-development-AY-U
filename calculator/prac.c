//waf to take pointer parameter and use it to reverse an array.
#include<stdio.h>
void reversearray(int *p, int n)
{
	int *first = p;
	int *last = p+n-1;
	while(first<last)
	{
		int temp = *first;
		*first = *last;
		*last = temp;
		first=first+1;
		last=last-1;
	}
	printf("Reversed array elements are: ");
	for(int i=0; i<n; i++)
		printf("%d ", *p++);
}
int main()
{
	int n;
	printf("Enter n: ");
	scanf("%d", &n);
	int array[n];

	for(int i=0; i<n; i++){
    	printf("Enter %d numbers: ",i+1);
		scanf("%d", &array[i]);
    }
    int *a=&array[0];
    reversearray(a, n);
	return 0;
}

//make as structure of employee:


#include<stdio.h>

struct karmchaari
{
    int salary;
    char name[100];
    int level;
    int yoe;

};



int main(){



return 0;
}









