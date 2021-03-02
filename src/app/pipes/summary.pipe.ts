import { summaryFileName } from '@angular/compiler/src/aot/util';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {
    // transform(value: string, limit?: number)
    transform(value: string, limit?: number): any {
        if(!value) return null;
    let actualLimt = (limit) ? limit : 20;

        // return value.substr(0, limit || 50) + '...';
        return value.substr(0,actualLimt) + '....';
    }
}