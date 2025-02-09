<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProjectsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('projects')->insert([
            [
                'title' => 'Academic Management System',
                'description' => '    The <strong>SGA - Academic Management System</strong> centralizes student records, course management, and administrative processes for universities. 
    Upgraded from Laravel 5.1 to Laravel 10, it improves performance, scalability, and user experience, ensuring seamless academic operations.',
                'image' => 'sga_unasam.png',
                'link' => null,
                'github' => null,
                'tech_stack' => 'Laravel, VueJS, SQLServer, MySQL',
                'html' => '<p>Academic Management System developed for National University Santiago Antúnez de Mayolo, featuring a Laravel 10 backend and VueJS frontend. Optimized for performance and scalability.</p>',
                'featured' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Optimized Multicriteria Evaluation System (IMCA)',
                'description' => 'A system implementing advanced statistical calculations with Material3 design.',
                'image' => 'imca.png',
                'link' => null,
                'github' => null,
                'tech_stack' => 'Laravel, VueJS, MySQL, Tailwind CSS',
                'html' => '<p>IMCA simplifies complex decision-making with advanced multicriteria evaluation.</p>',
                'featured' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Unique Attention Format System for the Health Network',
                'description' => 'A tool to standardize and manage patient attention formats across the health network.',
                'image' => 'health_network.png',
                'link' => null,
                'github' => null,
                'tech_stack' => 'Laravel, React, MySQL',
                'html' => '<p>This system streamlines healthcare attention format management.</p>',
                'featured' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'title' => 'MokuRoku',
                'description' => 'A Flutter app for managing products and generating catalogs efficiently.',
                'image' => 'mokuroku.png',
                'link' => null,
                'github' => 'https://github.com/KurousagiDev/mokuroku',
                'tech_stack' => 'Flutter',
                'html' => '<p>A modern product catalog management app built with Flutter and Firebase.</p>',
                'featured' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Business Diagnosis Ssystem',
                'description' => 'The <strong>Business Diagnosis System</strong> helps companies assess performance using key financial and operational metrics. 
    It provides real-time analytics, automated risk assessments, and interactive dashboards, enabling data-driven decision-making and strategic planning.',
                'image' => 'clinica_fec.png',
                'link' => null,
                'github' => null,
                'tech_stack' => 'Laravel, VueJS, MySQL',
                'html' => '<p>AI-powered form generation system for a Business Diagnosis System.</p>',
                'featured' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'SIGA UNIA (Academic Management System)',
                'description' => 'Integrated APIs to improve student and staff management in an academic environment.',
                'image' => 'siga_unia.png',
                'link' => null,
                'github' => null,
                'tech_stack' => 'Laravel, VueJS, MySQL',
                'html' => '<p>Comprehensive academic management system with API integrations.</p>',
                'featured' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Treasury Payment Registration System',
                'description' => 'The <strong>Treasury Payment Registration System</strong> streamlines payment tracking and financial reporting for UNASAM. 
    With automated transaction logging, secure role-based access, and real-time auditing tools, it enhances efficiency and transparency in treasury operations.',
                'image' => 'treasury_unasam.png',
                'link' => null,
                'github' => null,
                'tech_stack' => 'Laravel, VueJS, MySQL',
                'html' => '<p>Secure payment tracking system designed for a universitie\'s treasury department.</p>',
                'featured' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Record Management System for Resolutions',
                'description' => 'Built a streamlined solution for managing official resolutions with advanced search capabilities.',
                'image' => 'diresa_resolutions.png',
                'link' => null,
                'github' => null,
                'tech_stack' => 'Laravel, VueJS, MySQL',
                'html' => '<p>Efficient record management system for DIRESA resolutions.</p>',
                'featured' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Attendance Record Management System',
                'description' => 'The <strong>Attendance Record Management System</strong> automates employee and student attendance tracking with real-time monitoring and reporting. 
    It reduces manual errors, enhances accuracy, and provides secure role-based access for efficient record management.',
                'image' => 'diresa_attendance.png',
                'link' => null,
                'github' => null,
                'tech_stack' => 'Laravel, VueJS, MySQL',
                'html' => '<p>Automated attendance tracking system with real-time reporting.</p>',
                'featured' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Management System for CIP HUARAZ Members',
                'description' => 'Implemented API integrations to streamline membership management and user authentication.',
                'image' => 'cip_huaraz.png',
                'link' => null,
                'github' => null,
                'tech_stack' => 'Symfony, VueJS, MySQL',
                'html' => '<p>Secure and efficient membership management system for CIP HUARAZ.</p>',
                'featured' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Expense Tracker',
                'description' => 'A personal finance tracking application built with Laravel and Svelte.',
                'image' => 'expense_tracker.png',
                'link' => null,
                'github' => 'https://github.com/KurousagiDev/expense-tracker',
                'tech_stack' => 'Laravel, Svelte, MySQL',
                'html' => '<p>Expense Tracker helps users manage their finances efficiently with real-time insights.</p>',
                'featured' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Issue Tracker',
                'description' => 'A bug tracking system with role-based access and real-time updates.',
                'image' => 'issue_tracker.png',
                'link' => null,
                'github' => 'https://github.com/KurousagiDev/issue-tracker',
                'tech_stack' => 'Laravel, VueJS, MySQL',
                'html' => '<p>Issue Tracker is a powerful tool for managing software bugs and project issues.</p>',
                'featured' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
