mod drizzle_proxy;
include!(concat!(env!("OUT_DIR"), "/generated_migrations.rs"));

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    let migrations = load_migrations();
    tauri::Builder::default()
        .plugin(
            tauri_plugin_sql::Builder::new()
                .add_migrations("sqlite:database.db", migrations)
                .build(),
        )
        .plugin(tauri_plugin_store::Builder::new().build())
        .setup(|app| {
            if cfg!(debug_assertions) {
                app.handle().plugin(
                    tauri_plugin_log::Builder::default()
                        .level(log::LevelFilter::Info)
                        .build(),
                )?;
            }
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![drizzle_proxy::run_sql])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
