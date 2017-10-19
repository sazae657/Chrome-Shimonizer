#import <Foundation/Foundation.h>
#import <AppKit/AppKit.h>

int main(int argc, char *argv[])
{
    [NSApplication sharedApplication];
    asm volatile(
        "UD2"
    );
    return -INT_MAX;
}
