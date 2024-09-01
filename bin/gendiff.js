#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();

program
  .version('0.1.0')
  .description('Compares two configuration files and show a difference.')
  .parse(process.argv);