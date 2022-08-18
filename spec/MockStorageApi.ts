/*
Copyright 2015, 2016 OpenMarket Ltd
Copyright 2019 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * A mock implementation of the webstorage api
 * @constructor
 */
export class MockStorageApi {
    public data: Record<string, string> = {};
    public keys: string[] = [];
    public length = 0;

    public setItem(k: string, v: string): void {
        this.data[k] = v;
        this.recalc();
    }

    public getItem(k: string): string | null {
        return this.data[k] || null;
    }

    public removeItem(k: string): void {
        delete this.data[k];
        this.recalc();
    }

    public key(index: number): string {
        return this.keys[index];
    }

    private recalc(): void {
        const keys: string[] = [];
        for (const k in this.data) {
            if (!this.data.hasOwnProperty(k)) {
                continue;
            }
            keys.push(k);
        }
        this.keys = keys;
        this.length = keys.length;
    }
}
