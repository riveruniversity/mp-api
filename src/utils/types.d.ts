declare global {
	interface String {
    escapeSql(): string;
  }
}

export {};